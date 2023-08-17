import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpDispatch } from '../Reducers/AppReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
	username: Yup.string().required('username Required'),
	email: Yup.string().required('email Required'),
	password: Yup.string().required('Password Required'),
});
const Login = () => {
	const navigate = useNavigate;
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<>
			<Grid container>
				<Grid item lg={4} style={{ padding: '10px' }}>
					<Box>
						<Box mb={5} mt={3}>
							<h1>Sign Up Page </h1>
						</Box>
						<Box
							style={{
								border: '1px solid black',
								padding: '10px',
								borderRadius: '8px',
								textAlign: 'center',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Box
								mt={0.5}
								style={{
									color: 'rgba(138, 51, 253, 1)',
									fontSize: '18px',
									fontWeight: '500',
									marginLeft: '12px',
								}}>
								Continue With Google
							</Box>
						</Box>{' '}
						<Box
							mt={3}
							style={{
								border: '1px solid black',
								padding: '10px',
								borderRadius: '8px',
								textAlign: 'center',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<Box
								mt={0.5}
								style={{
									color: 'rgba(138, 51, 253, 1)',
									fontSize: '18px',
									fontWeight: '500',
									marginLeft: '12px',
								}}>
								Continue With Twitter
							</Box>
						</Box>
						<Box mt={3} style={{ display: 'flex' }}>
							<Box
								mt={1}
								style={{
									// color: 'rgba(102, 102, 102, 0.25)',
									backgroundColor: 'rgba(102, 102, 102, 0.25)',
									height: '2px',
									width: '247px',
								}}></Box>
							<Box ml={1}>OR</Box>
							<Box
								ml={1}
								mt={1}
								style={{
									// color: 'rgba(102, 102, 102, 0.25)',
									backgroundColor: 'rgba(102, 102, 102, 0.25)',
									height: '2px',
									width: '247px',
								}}></Box>
						</Box>
						<Formik
							initialValues={{
								username: '',
								email: '',
								password: '',
							}}
							validationSchema={LoginSchema}
							onSubmit={(values) => {
								console.log('register', values);
								dispatch(signUpDispatch(values));
							}}>
							{(formik) => {
								const { errors, touched, isValid, dirty } = formik;
								return (
									<Form>
										<Box mt={5}>
											<Box mb={1}>username </Box>
											<Field
												style={{
													borderColor: 'rgba(60, 66, 66, 1)',
													padding: '8px',
												}}
												type='text'
												className='form-control'
												name='username'></Field>
											{errors.username ? (
												<span style={{ color: 'red' }}>{errors.username}</span>
											) : null}
											<Box
												mt={2}
												mb={0}
												style={{
													display: 'flex',
													justifyContent: 'flex-end',
												}}></Box>
											<Box
												mb={1}
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>Email</Box>
											</Box>
											<Field
												style={{
													borderColor: 'rgba(60, 66, 66, 1)',
													padding: '8px',
												}}
												type='text'
												className='form-control'
												name='email'></Field>
											{errors.email ? (
												<span style={{ color: 'red' }}>{errors.email}</span>
											) : null}
											<Box
												mb={1}
												style={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>Password</Box>
											</Box>
											<Field
												style={{
													borderColor: 'rgba(60, 66, 66, 1)',
													padding: '8px',
												}}
												type='text'
												className='form-control'
												name='password'></Field>
											{errors.password ? (
												<span style={{ color: 'red' }}>{errors.password}</span>
											) : null}
											{/* <Box
												mt={1}
												style={{ display: 'flex', justifyContent: 'flex-end' }}>
												<Box style={{ textDecoration: 'underline' }}>
													Forget Password
												</Box>
											</Box> */}
										</Box>
										<Box>
											<button
												type='submit'
												style={{
													padding: '8px 30px',
													background: 'rgba(138, 51, 253, 1)',
													border: 'none',
													borderRadius: '5px',
													color: 'white',
												}}>
												Sign Up
											</button>
										</Box>
										<Box mt={1}>Don’t have an account? Sign up </Box>
									</Form>
								);
							}}
						</Formik>
					</Box>
				</Grid>
				<Grid item lg={8}></Grid>
			</Grid>
		</>
	);
};

export default Login;
