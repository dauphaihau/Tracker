import React, {useRef, useState} from 'react';
import {DELETE_COMMENT_SAGA, INSERT_COMMENT_SAGA, UPDATE_COMMENT_SAGA} from "../../store/types/Type";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {Link, TextField} from "@material-ui/core";
import reactHtmlParse from "react-html-parser";
import _ from "lodash";

function EditTaskComment({taskId, taskDetailModal}) {

    const dispatch = useDispatch();
    const contentComment = useRef('')
    const [visibleComment, setVisibleComment] = useState(false)
    // const {taskDetailModal} = useSelector(state => state.TaskReducer);
    console.log('task-detail-modal', taskDetailModal)

    // console.log('data-comment', dataComment)

    return <>
        <div className="form-group">
            <div className="container mt-1 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="coment-bottom bg-white w-100">
                        <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                            <img className="img-fluid img-responsive rounded-circle mr-2"
                                 src="https://i.pravatar.cc/300" width="38"/>
                            <TextField fullWidth id="standard-basic" label="Add a comment" size='small'
                                       variant="outlined"
                                // name='lstComment'
                                       onChange={(e) => {
                                           contentComment.current = e.target.value;
                                       }}
                            />
                            <Button color='primary' className='ml-2' variant="contained"
                                    onClick={() => {
                                        dispatch({
                                            type: INSERT_COMMENT_SAGA,
                                            infoComment: {
                                                taskId: taskId,
                                                contentComment: contentComment.current
                                            }
                                        })
                                    }}
                            >Save</Button>
                        </div>
                        {_.reverse(_.clone(taskDetailModal.lstComment)).map((element, index) => {
                            return <div className="commented-section mt-2 mb-3 ml-5" key={index}>
                                <div className="d-flex flex-row align-items-center commented-user">
                                    <h5 className="mr-2">{element.name}</h5>
                                    <span className="dot mb-1

                                    "/><span className="mb-1 ml-2"
                                             style={{color: `rgb(75, 85, 101)`, fontSize: '12.5px'}}
                                >{Math.floor(Math.random() * 24)} hours ago</span>
                                </div>
                                <div className="comment-text-sm">
                                    {visibleComment ? <div>
                                            <TextField id="standard-basic"
                                                       value={element.commentContent}
                                                       variant="standard"
                                                       onChange={(e) => {
                                                           contentComment.current = e.target.value;
                                                       }}
                                                       fullWidth
                                            />
                                            <div>
                                                <Button size='small' color='primary' className='mt-2 mr-2'
                                                        variant="contained"
                                                        onClick={() => {
                                                            dispatch({
                                                                type: UPDATE_COMMENT_SAGA,
                                                                taskId: taskId,
                                                                userId: element.idUser,
                                                                contentComment: contentComment.current
                                                            })
                                                            setVisibleComment(false)
                                                        }}>Save
                                                </Button>
                                                <Button size='small' className='mt-2 mr-2' variant="text"
                                                        onClick={() => {
                                                            setVisibleComment(false)
                                                        }}>Close
                                                </Button>
                                            </div>
                                        </div>
                                        : <>
                                            <div className='mb-1'>{reactHtmlParse(element.commentContent)}</div>
                                            <div className="reply-section">
                                                <div className="d-flex flex-row align-items-center voting-icons"><i
                                                    className="fa fa-sort-up fa-2x mt-3 hit-voting"/><i
                                                    className="fa fa-sort-down fa-2x mb-3 hit-voting"
                                                />
                                                    <Link
                                                        underline="hover"
                                                        className="pl-0 mr-2"
                                                        style={{color: `rgb(94, 108, 132)`, fontSize: '14.5px'}}
                                                        onClick={() => {
                                                            setVisibleComment(!visibleComment)
                                                        }}
                                                    >Edit
                                                    </Link>
                                                    <Link
                                                        underline="hover"
                                                        style={{color: `rgb(94, 108, 132)`, fontSize: '14.5px'}}
                                                        onClick={() => {
                                                            dispatch({
                                                                type: DELETE_COMMENT_SAGA,
                                                                idComment: element.id,
                                                                taskId: taskId,
                                                            })
                                                        }}
                                                    >Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </>}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default EditTaskComment;