import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    UPDATE_PROJECT_SAGA,
    SET_SUBMIT_CONTENT,
    GET_PROJECT_CATEGORY_SAGA
} from "../../store/types/Type";
import {withFormik} from "formik";
import * as yup from 'yup';
import {connect} from "react-redux";
import * as Yup from "yup";
import {Editor} from "@tinymce/tinymce-react";
import {FormControl, FormHelperText, makeStyles, MenuItem, TextField} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    textField: {
        [theme.breakpoints.down('md')]: {
            marginTop: 20
        }
    }
}));

function EditProjectForm(props) {

    useEffect(() => {
        setFieldValue('description', values.description);
        dispatch({type: GET_PROJECT_CATEGORY_SAGA});
        dispatch({
            type: SET_SUBMIT_CONTENT,
            submitFn: handleSubmit
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const {projectCategory} = useSelector(state => state.ProjectReducer);
    const dispatch = useDispatch();
    const editorRef = useRef(null);
    const classes = useStyle();

    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit, setFieldValue
    } = props;


    const handleEditorChange = (content) => {
        values.description = content;
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <FormControl className={classes.textField} fullWidth sx={{m: 1, minWidth: 120}} error>
                        <TextField
                            value={values.id}
                            disabled fullWidth name="id"
                            id="outlined-error-helper-text"
                            label="Id Project" variant="outlined"
                        />
                    </FormControl>
                </div>
                <div className='col-md-4 col-12'>
                    <FormControl className={classes.textField} fullWidth sx={{m: 1, minWidth: 120}} error>
                        <TextField
                            value={values.projectName}
                            onChange={handleChange} fullWidth
                            name="projectName"
                            id="outlined-error-helper-text"
                            label="Project Name" variant="outlined"
                        />
                        <FormHelperText error>
                            {touched.projectName && errors.projectName ? `${errors.projectName}` : null}
                        </FormHelperText>
                    </FormControl>
                </div>
                <div className='col-md-4 col-12'>
                    <FormControl className={classes.textField} fullWidth sx={{m: 1, minWidth: 120}} error>
                        <TextField
                            select variant="outlined" color='primary'
                            name='categoryId' label='Category'
                            value={values.categoryId}
                            onChange={e => setFieldValue('categoryId', e.target.value)}
                        >
                            {projectCategory.map((item, index) => (
                                <MenuItem key={index} value={item.id}>
                                    {item.projectCategoryName}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </div>
                <div className='col-12 mt-3'>
                    <div className='form-group'>
                        <p className='font-weight-bold'>Description</p>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue={values.description}
                            name='description'
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            onEditorChange={handleEditorChange}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

const EditProjectFormByFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        const {formProjectEdit} = props;
        return {
            id: formProjectEdit.id,
            projectName: formProjectEdit.projectName,
            description: formProjectEdit.description,
            categoryId: formProjectEdit.categoryId
        }
    },
    validationSchema: yup.object().shape({
        projectName: Yup.string().required('Project name is required'),
        description: Yup.string().required('Description is required'),
    }),
    handleSubmit: (values, {props}) => {
        console.log('values', values)
        props.dispatch({
            type: UPDATE_PROJECT_SAGA,
            dataEdited: values
        })
    },
    displayName: 'EditProjectForm'
})(EditProjectForm)

const mapStateToProps = state => ({
    formProjectEdit: state.ProjectReducer.formProjectEdit
})

export default connect(mapStateToProps)(EditProjectFormByFormik);