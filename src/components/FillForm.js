import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Col} from 'react-bootstrap';

import CompletedForm from './CompletedForm';
import choose from '../images/choose.png';
import { createTestimonial } from '../actions/testimonials';

const  FillForm = ({handleShowCompleted, handleClose, modalState}) => {
    const [image, setImage] = useState(null);
    const [postData, setPostData] = useState({
        firstName: '',
        lastName: '',
        story: '',
        creator: '',
        selectedFile: '',
        institution: ''
    });
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTestimonial(postData));
    }

    const handleImageChange = (e) => {

        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        let images = []
        for (var i = 0; i < e.target.files.length; i++) {
            images[i] = e.target.files.item(i);
        }
        images = images.filter(file => file.name.match(/\.(jpg|jpeg|png|gif)$/))
        if (images.length === 0){
            reader.onloadend = () => {
                setImage(file)
            }
            
            
        } else {
                reader.onloadend = () => {
                    setImage(file)
                }
            }

        reader.readAsDataURL(file)
    }

    return (
        <div>
            <CompletedForm handleClose={handleClose} modalState={modalState} />

          <Modal show={modalState === "modal-one"} onHide={handleClose}>
            <Modal.Body>
                <h4 className="font-weight-bold text-center mb-4">Share your amazing story!</h4>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Upload your Picture</Form.Label> <br/>
                        <label htmlFor="file" style={{cursor: 'pointer'}}>
                           { image ?
                            <ul class="flex-container space-between filename">
                                <li class="flex-item">{image.name}</li>
                                <li class="flex-item">x </li>
                            </ul>
                            : <img src={choose} alt="uploadImage" className="img-fluid" />  
                            }                                            
                        </label>
                        <input
                            style={{display:'none'}}
                            type={"file"} 
                            id="file" 
                            className="form-file"
                            name="file" 
                            placeholder=""
                            value={postData.selectedFile}
                            onChange={(e)=>handleImageChange(e)}
                                />
                                
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={postData.firstName}
                            onChange={(e) => setPostData({ ...postData, firstName: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={postData.lastName}
                            onChange={(e) => setPostData({ ...postData, lastName: e.target.value })}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Share your story</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={postData.story}
                            onChange={(e) => setPostData({ ...postData, story: e.target.value })}
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>What did you interact with Vasiti as?&nbsp;&nbsp;&nbsp;</Form.Label>
                        <Form.Check inline as="input" type="radio" for="Customer" label="Customer" />
                        <Form.Check inline as="input" type="radio" for="Vendor" label="Vendor" />
                    </Form.Group> 

                    <Form.Group controlId="exampleForm.ControlTextarea2">
                        <Form.Label>City or Higher Institution (for Students)</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            value={postData.institution}
                            onChange={(e) => setPostData({ ...postData, institution: e.target.value })}
                            />
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                    <Button onClick={() => {handleShowCompleted(); handleSubmit();}} type="submit" variant="orange">Share your story!</Button>
                    </div>
                </Form>
            </Modal.Body>
          </Modal>
        </div>
    );
};

export default FillForm;
