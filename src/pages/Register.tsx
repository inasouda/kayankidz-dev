import  { useState } from 'react';
import { useFormik } from 'formik';
import {  useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import axios from 'axios';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { FormLabel } from 'react-bootstrap';
import logo from '../assets/imgs/logo2.webp';

const Register = () => {
  const [step, setStep] = useState(1);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      studentNameA: '',
      studentNameE: '',
      dob: '',
      gender: '',
      originCountry: '',
      mainLang: '',
      schoolName: '',
      grade: '',
      motherNm: '',
      motherPhoneNo: '',
      motherWANm: '',
      fatherNm: '',
      fatherPhoneNo:'',
      fatherWANm: '',
      address: '',
      postalCode: '',
      email: '',
      emergencyContact:'',
      prevKayanStd:'',
      prevArabicSchoolStd:'',
      knowUs:'',
      acceptTerms:false,
    },
    validationSchema: Yup.object({
      studentNameA: Yup.string().required('Required'),
      studentNameE: Yup.string().required('Required'),
      dob: Yup.date().required('Required'),
      gender: Yup.string().required('Required'),
      originCountry: Yup.string().required('Required'),
      mainLang: Yup.string().required('Required'),
      schoolName: Yup.string().required('Required'),
      grade: Yup.string().required('Required'),
      motherNm: Yup.string().required('Required'),
      motherPhoneNo: Yup.string().required('Required'),
      motherWANm: Yup.string().required('Required'),
      fatherNm: Yup.string().required('Required'),
      fatherPhoneNo: Yup.string().required('Required'),
      fatherWANm: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      postalCode: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      emergencyContact:Yup.string().required('Required'),
      prevKayanStd:Yup.string().required('Required'),
      acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Required'), 

    }),
    
    onSubmit: async (values, { resetForm }) => {
      try {
        // console.log('inside submit')
        // const uri = process.env.uri || ''

        // const response = await axios.post('https://kayankidz-server.vercel.app/api/v1/students', values);
        const response = await axios.post('https://kayankidz-server-fc671973cdee.herokuapp.com/api/v1/students', values);

        // const response = await axios.post('http://localhost:3000/api/v1/students', values);
        console.log('Server response:', response);
        resetForm();
        // do it later 
        // sendToExcel(values);
        sendEmail(response.data);
        
        navigate('/confirmation');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  });

  // do it later
  // const  sendToExcel =  async (data:{}) =>{
  //   // https://docs.google.com/spreadsheets/d/1WK0oVg5fP8RmSOvxIoZQj_hXzWFilDjTIRvLJHTJGcw/edit?usp=sharing
  //   const googleSheetsUrl = 'https://docs.google.com/spreadsheets/d/1WK0oVg5fP8RmSOvxIoZQj_hXzWFilDjTIRvLJHTJGcw/edit?usp=sharing';
  //     // Save data to Google Sheets
  //     try{
  //     await axios.post(googleSheetsUrl, data);
  //     }
  //     catch (error) {
  //       console.error('Error submitting data:', error);
  //       alert('An error occurred.');
  //     }
  // }

  const sendEmail = (data: { studentNameE: string; email: string; motherPhoneNo: string }) => {
    const templateParams = {
      studentName: data.studentNameE,
      phoneNumber: data.motherPhoneNo,
      email: data.email,
    };
    console.log('Template Params:', templateParams);

    emailjs.send(
      'service_8pcdjyn',
      'template_kzyk8xq',
      templateParams,
      'HA2UPktyOeaIsgP6s'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.status, result.text);
    })
    .catch((error) => {
      console.error('Failed to send email.', error);
      alert('There was an error sending the email.');
    });
  };
  const handleRadioChange = (e:any) => {
    if (e.target.value === 'Other') {
      setIsOtherSelected(true);
      formik.setFieldValue('mainLang', ''); 
    } else {
      setIsOtherSelected(false);
      formik.setFieldValue('mainLang', e.target.value);
    }
  };

  const handleOtherLangChange = (e:any) => {
    formik.setFieldValue('mainLang', e.target.value);
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <PageContainer>
        <KayanHeader>
            <KayanRegistrationHeader>KAYAN REGISTRATION </KayanRegistrationHeader>
            <YearLabel> 2024-2025</YearLabel>
             <KayanImg  src={logo} alt="Logo" />
        </KayanHeader>
        <FormContainer>
            <form style={{width:'100%'}} onSubmit={formik.handleSubmit}>
                {step === 1 && (
                    <>
                    <SectionHeader>STUDENT INFORMATION</SectionHeader>
                    <FormGroup>
                        <Label htmlFor="studentNameA">Student Name in Arabic (First, Last)</Label>
                        <Input
                        id="studentNameA"
                        name="studentNameA"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.studentNameA}
                        placeholder='Please enter Student Name in Arabic'
                        />
                        {formik.touched.studentNameA && formik.errors.studentNameA && (
                        <ErrorMessage>{formik.errors.studentNameA}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="studentNameE">Student Name in English (First, Last)</Label>
                        <Input
                        id="studentNameE"
                        name="studentNameE"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.studentNameE}
                        placeholder='Please enter Student Name in English'

                        />
                        {formik.touched.studentNameE && formik.errors.studentNameE && (
                        <ErrorMessage>{formik.errors.studentNameE}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                        id="dob"
                        name="dob"
                        type="date"
                        width={100}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.dob}
                        />
                        {formik.touched.dob && formik.errors.dob && (
                        <ErrorMessage>{formik.errors.dob}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="originCountry">Child Country of Origion</Label>
                        <Input
                        id="originCountry"
                        name="originCountry"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.originCountry}
                        placeholder='Please enter Child Country of Origin'

                        />
                        {formik.touched.originCountry && formik.errors.originCountry && (
                        <ErrorMessage>{formik.errors.originCountry}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label>Gender</Label>
                        <RadioGroup>
                        <RadioElement>
                            <RadioInput
                            id="genderMale"
                            name="gender"
                            type="radio"
                            value="Male"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gender === 'Male'}
                            /> 
                            <FormLabel>Male</FormLabel>
                        </RadioElement>
                        <RadioElement>
                            <RadioInput
                                id="genderFemale"
                                name="gender"
                                type="radio"
                                value="Female"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.gender === 'Female'}
                            /> 
                            <FormLabel>Female</FormLabel> 
                        </RadioElement>
                        </RadioGroup>
                        {formik.touched.gender && formik.errors.gender && (
                        <ErrorMessage>{formik.errors.gender}</ErrorMessage>
                        )}
                    </FormGroup>
                    {/* Main Language */}
                    <FormGroup>
                        <Label>Main Language spoken at home</Label>
                        <RadioGroup>
                        <RadioElement>
                                <RadioInput
                                    id="englishLang"
                                    name="mainLang"
                                    type="radio"
                                    value="English"
                                    onChange={handleRadioChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.mainLang === 'English'}
                                /> 
                                <FormLabel>English</FormLabel>
                        </RadioElement>
                        <RadioElement>
                            <RadioInput
                                id="arabicLang"
                                name="mainLang"
                                type="radio"
                                value="Arabic"
                                onChange={handleRadioChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.mainLang === 'Arabic'}
                            />
                            <FormLabel>Arabic</FormLabel>
                        </RadioElement>
                        <RadioElement>
                            <RadioInput
                                id="franchLang"
                                name="mainLang"
                                type="radio"
                                value="French"
                                onChange={handleRadioChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.mainLang === 'French'}
                            /> 
                            <FormLabel>French</FormLabel>
                        </RadioElement>
                        <RadioElement>
                        <RadioInput
                            id="otherLang"
                            name="mainLang"
                            type="radio"
                            value="Other"
                            onChange={handleRadioChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.mainLang === 'Other'}
                            />
                            <FormLabel>Other</FormLabel>
                            {isOtherSelected && (
                            <Input 
                                type="text"
                                name="otherLang"
                                placeholder="Enter main language"
                                onChange={handleOtherLangChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mainLang}
                            />
                    )}
                        </RadioElement>
                        </RadioGroup>
                        {formik.touched.mainLang && formik.errors.mainLang && (
                        <ErrorMessage>{formik.errors.mainLang}</ErrorMessage>
                        )}
                    </FormGroup>
                    <SectionHeader>Student Academic Information</SectionHeader>
                    <FormGroup>
                        <Label htmlFor="schoolName">School Name</Label>
                        <Input
                        id="schoolName"
                        name="schoolName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.schoolName}
                        placeholder='Please enter School Name'
                        />
                        {formik.touched.schoolName && formik.errors.schoolName && (
                        <ErrorMessage>{formik.errors.schoolName}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="grade">School Grade 2024-2025</Label>
                        <Input
                        as="select"
                        id="grade"
                        name="grade"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.grade}
                        >
                        <option value="" label="Select grade" />
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={`Grade ${i + 1}`} label={`Grade ${i + 1}`} />
                        ))}
                        </Input>
                        {formik.touched.grade && formik.errors.grade && (
                        <ErrorMessage>{formik.errors.grade}</ErrorMessage>
                        )}
                    </FormGroup>
                    <Button type="button" onClick={handleNext}>Next</Button>
                    </>
                )}

                {step === 2 && (
                    <>
                    <SectionHeader>Parent / Gurdian Information</SectionHeader>
                    <FormGroup>
                        <Label htmlFor="motherNm">Mother's Name</Label>
                        <Input
                        id="motherNm"
                        name="motherNm"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.motherNm}
                        placeholder='Please enter Mother Name'
                        />
                        {formik.touched.motherNm && formik.errors.motherNm && (
                        <ErrorMessage>{formik.errors.motherNm}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="motherPhoneNo">Mother's Phone Number</Label>
                        <Input
                        id="motherPhoneNo"
                        name="motherPhoneNo"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.motherPhoneNo}
                        placeholder='Please enter  Mother Phone Number '
                        />
                        {formik.touched.motherPhoneNo && formik.errors.motherPhoneNo && (
                        <ErrorMessage>{formik.errors.motherPhoneNo}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="motherWANm">Mother's WhatsApp Number</Label>
                        <Input
                        id="motherWANm"
                        name="motherWANm"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.motherWANm}
                        placeholder='Please enter  Mother Whats app Number '

                        />
                        {formik.touched.motherWANm && formik.errors.motherWANm && (
                        <ErrorMessage>{formik.errors.motherWANm}</ErrorMessage>
                        )}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="fatherNm">Father's Name</Label>
                        <Input
                        id="fatherNm"
                        name="fatherNm"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fatherNm}
                        placeholder='Please enter Father Name'
                        />
                        {formik.touched.fatherNm && formik.errors.fatherNm && (
                        <ErrorMessage>{formik.errors.motherNm}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="fatherPhoneNo">Father's Phone Number</Label>
                        <Input
                        id="fatherPhoneNo"
                        name="fatherPhoneNo"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fatherPhoneNo}
                        placeholder='Please enter Father phone Number'

                        />
                        {formik.touched.fatherPhoneNo && formik.errors.fatherPhoneNo && (
                        <ErrorMessage>{formik.errors.fatherPhoneNo}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="fatherWANm">Father's WhatsApp Number</Label>
                        <Input
                        id="fatherWANm"
                        name="fatherWANm"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fatherWANm}
                        placeholder='Please enter Father Whats app Number'

                        />
                        {formik.touched.fatherWANm && formik.errors.fatherWANm && (
                        <ErrorMessage>{formik.errors.fatherWANm}</ErrorMessage>
                        )}
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="email">Contact Email Address</Label>
                        <Input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder='Please enter Contact Email Address'

                        />
                        {formik.touched.email && formik.errors.email && (
                        <ErrorMessage>{formik.errors.email}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">Home Address</Label>
                        <Input
                        id="address"
                        name="address"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        placeholder='Please enter Home Address'
                        />
                        {formik.touched.address && formik.errors.address && (
                        <ErrorMessage>{formik.errors.address}</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="addpostalCoderess">Postal Code</Label>
                        <Input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postalCode}
                        placeholder='Please enter Postal Code'
                        />
                        {formik.touched.postalCode && formik.errors.postalCode && (
                        <ErrorMessage>{formik.errors.postalCode}</ErrorMessage>
                        )}
                        
                    </FormGroup>
                    <Button type="button" onClick={handleBack}>Back</Button>
                    <Button type="button" onClick={handleNext}>Next</Button>
                    </>
                )}

                {step === 3 && (
                    <>
                            <SectionHeader>Additional Information</SectionHeader>
                            <FormGroup>
                                <Label htmlFor="emergencyContact">Emergency Contact (Full Name, Phone Number)</Label>
                                <Input
                                id="emergencyContact"
                                name="emergencyContact"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emergencyContact}
                                placeholder='Please enter Emergency Contact'
                                />
                                {formik.touched.emergencyContact && formik.errors.emergencyContact && (
                                <ErrorMessage>{formik.errors.emergencyContact}</ErrorMessage>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label>Was your child registered in KAYAN before?</Label>
                                <RadioGroup>
                                <RadioElement>
                                    <RadioInput
                                    id="prevKayanStdY"
                                    name="prevKayanStd"
                                    type="radio"
                                    value="Yes"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.prevKayanStd === 'Yes'}
                                    /> 
                                    <FormLabel>Yes</FormLabel>
                                </RadioElement>
                                <RadioElement>
                                    <RadioInput
                                        id="prevKayanStdN"
                                        name="prevKayanStd"
                                        type="radio"
                                        value="No"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.prevKayanStd === 'No'}
                                    /> 
                                    <FormLabel>No</FormLabel> 
                                </RadioElement>
                                </RadioGroup>
                                {formik.touched.prevKayanStd && formik.errors.prevKayanStd && (
                                <ErrorMessage>{formik.errors.prevKayanStd}</ErrorMessage>
                                )}
                            </FormGroup>

                            <FormGroup>
                                <Label>Was your child registered in an Arabic or Islamic School before?</Label>
                                <RadioGroup>
                                <RadioElement>
                                    <RadioInput
                                    id="prevArabicStdY"
                                    name="prevArabicSchoolStd"
                                    type="radio"
                                    value="Yes"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.prevArabicSchoolStd === 'Yes'}
                                    /> 
                                    <FormLabel>Yes</FormLabel>
                                </RadioElement>
                                <RadioElement>
                                    <RadioInput
                                        id="prevArabicStdN"
                                        name="prevArabicSchoolStd"
                                        type="radio"
                                        value="No"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.prevArabicSchoolStd === 'No'}
                                    /> 
                                    <FormLabel>No</FormLabel> 
                                </RadioElement>
                                </RadioGroup>
                                {formik.touched.prevArabicSchoolStd && formik.errors.prevArabicSchoolStd && (
                                <ErrorMessage>{formik.errors.prevArabicSchoolStd}</ErrorMessage>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="knowUs">How did you hear about our school? If a friend please mention their name.</Label>
                                <Input
                                id="knowUs"
                                name="knowUs"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.knowUs}
                                placeholder='Please enter How do you know us?'
                                />
                                {formik.touched.knowUs && formik.errors.knowUs && (
                                <ErrorMessage>{formik.errors.knowUs}</ErrorMessage>
                                )}
                            </FormGroup>
                            
                            <Button type="button" onClick={handleBack}>Back</Button>
                            <Button type="button" onClick={handleNext}>Next</Button>
                    </>
                )}
                
                {step === 4&& (
                    <>
                        <SectionHeader>Consent</SectionHeader>
                        <FormGroup>
                            <Label style={{color:'red'}}>Please thoroughly READ the following points</Label>
                            <List>
                                <ListItem>Program runs from September to June and I am committed to all the following mentioned below.</ListItem>
                                <ListItem>FEES are to be paid at the beginning of each Round for the 4 sessions regardless to my child attendance. (Payment Reminders will be sent Regularly).</ListItem>
                                <ListItem>Fees are to be paid for the ROUND (4 sessions), not for a number of sessions.</ListItem>
                                <ListItem>No make up sessions unless the cancellation is from KAYAN team side.</ListItem>
                                <ListItem>KAYAN Trips might require additional fees.</ListItem>
                                <ListItem>KAYAN Hajj Event require additional fees</ListItem>
                                <ListItem>KAYAN Ramadan Event requires additional fees</ListItem>
                                <ListItem>KAYAN Eid Events Require additional fees.</ListItem>
                                <ListItem>I am committed to dedicating time each week to study with my child and complete the assigned homework.</ListItem>
                                <ListItem>I must provide advance notice if my child will not be attending the session.</ListItem>
                                <ListItem>Frequent absence, lateness, or failure to complete the weekly homework may lead to my child's withdrawal from KAYAN.</ListItem>
                                <ListItem>Parents are not allowed to attend the sessions.</ListItem>
                                <ListItem>Some sessions require longer time or change in schedule.</ListItem>
                                <ListItem>Pictures for my kids might be used on KAYAN website, Facebook or Instagram shared by Instructors.</ListItem>
                                <ListItem>Exact DAY,TIME and DURATION of the session will be determined after submitting the registeration form.</ListItem>
                                <ListItem>All the pictures taken will be saved on google photos and shared with parents involved in the same group.</ListItem>
                                <ListItem>Its my full responsibility to update KAYAN instructors if there is any change in the information listed in this registration form.</ListItem>
                                <ListItem>I have READ KAYAN PROGRAM DESCRIPTION.</ListItem>
                                <ListItem>I understand that failure in commitment in the above might lead to my child withdrawl.</ListItem>
                            </List>
                            
                        </FormGroup>  
                        <FormGroup>
                            <CheckboxGroup>
                                <Checkbox
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    checked={formik.values.acceptTerms}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            <Label htmlFor="acceptTerms">
                            I have read and agree to all the terms and conditions.
                            </Label>
            
                </CheckboxGroup>
                {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                <ErrorMessage>{formik.errors.acceptTerms}</ErrorMessage>
                )}
            </FormGroup>
                    <Button type="button" onClick={handleBack}>Back</Button>
                    <Button type="submit" >Submit</Button>
                    </>
                )}

            </form>
        </FormContainer>

    </PageContainer>
    );
};

const KayanImg = styled.img`
    width :20rem;
    padding:2rem;
    @media (min-width: 768px) {
        width:30rem;
      }
`;

const KayanHeader = styled.div`
    width: 22.5rem;
    margin: 0 auto;
    margin-bottom:2rem;
    margin-top:3rem;
    background-color: #ffffff;
    border-radius: 0.625rem; 
    display:flex;
    flex-direction:column;
    align-items:center; 
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    @media (min-width: 768px) {
        width:50rem;
      }
`;  

const KayanRegistrationHeader = styled.div`
    font-size: 1.5rem;
    color: #333;
    // font-family:docs-Tenali Ramakrishna;
    font-weight:bold;
    padding:1rem;
    width:100%;
    background-color:orange;
    max-width: 50rem;
    border-top-left-radius: 0.5rem; 
    border-top-right-radius: 0.5rem;
`
const YearLabel= styled.span`
     font-size: 0.8rem;
     width:100%;
     background-color:orange;
     padding:0 1rem;
     padding-bottom:1rem;
`;

const FormContainer = styled.div`
    width: 22.5rem;
    margin: 0 auto;
    padding: 1rem; 
    background-color: #ffffff;
    border-radius: 0.625rem; 
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    @media (min-width: 768px) {
        width:50rem;
      }
 `;  

const PageContainer = styled.div`
  background-color: rgb(255, 219, 166);
  padding: 2rem; 
  min-height: 100vh;
  margin-bottom:0rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const FormGroup = styled.div`
  margin-bottom: 0.7rem; 
  padding: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem; 
  font-size: 0.9rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem; 
`;

const SectionHeader = styled.h2`
  max-width: 50rem;
  font-size: 1rem;
  color: #333;
  padding:1rem;
  background-color:orange;
  text-decoration: underline;
  border-radius:0.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem; 
  font-size: 0.9rem;
  &:after {
    content: ' *';
    color: red;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column; 
`;

const RadioElement = styled.div`
    display: flex;
    font-size: 0.8rem;
    gap:0.5rem;
`
const RadioInput = styled.input`
  margin-bottom: 0.5rem; 
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.7rem; 
  margin-top: 0.3125rem; 
`;

const Button = styled.button`
background-color: orange; 
color:white;
  padding: 0.75rem 1.5rem; 
  border: none;
  border-radius: 0.25rem; 
  font-size: 0.9rem;
  margin-right: 0.625rem; 
  transition: background-color 0.2s ease;
  &:hover {
    background-color:  #fff
    color: teal;
  }
`;
const CheckboxGroup = styled.div`
  display: flex;
  align-items:start;


`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem; 
  width:1rem;
  height:1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  outline: none;
  font-size: 0.9rem;
  &::placeholder {
    color: #aaa; 
  }
  &:focus {
    border-bottom: 1px solid red;
  }
`;



export default Register;
