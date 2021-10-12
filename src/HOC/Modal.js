import React from 'react'
import {useSelector} from 'react-redux'
import {
    SearchOutlined,
    EditOutlined,
    CloseOutlined,
    PlusOutlined
} from "@ant-design/icons";
import {Button} from "antd";

export default function Modal(props) {

    const {Component, handleSubmit} = useSelector(state => state.ModalReducer);

    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-end">
                            <Button type="primary" danger data-dismiss="modal" aria-label="Close"
                                    icon={<CloseOutlined/>}/>
                        </div>
                        <div className="modal-body">
                            {Component}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
