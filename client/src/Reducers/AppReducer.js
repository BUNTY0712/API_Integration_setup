import { axiosInstance } from '../Axios';

const { createSlice } = require('@reduxjs/toolkit');

const AppReducer = createSlice({
	name: 'blog',
	initialState: {
		success: 'false',
		loading: 'false',
		login: null,
		signUp: null,
		allBlog: null,
	},
	reducers: {
		loginRequest(state, action) {
			state.loading = true;
		},
		loginSuccess(state, action) {
			state.success = true;
			state.loading = false;
			state.login = action.payload;
			state.error = null;
		},
		loginFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		signUpRequest(state, action) {
			state.loading = true;
		},
		signUpSuccess(state, action) {
			state.loading = false;
			state.signUp = action.payload;
			state.error = null;
		},
		signUpFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		allBlogRequest(state, action) {
			state.loading = true;
		},
		allBlogSuccess(state, action) {
			state.loading = false;
			state.allBlog = action.payload;
			state.error = null;
		},
		allBlogFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

const { actions } = AppReducer;

export const {
	loginRequest,
	loginSuccess,
	loginFail,
	signUpRequest,
	signUpSuccess,
	signUpFail,
	allBlogRequest,
	allBlogSuccess,
	allBlogFail,
} = actions;

export const loginDispatch = (bodyData, navigate) => async (dispatch) => {
	try {
		dispatch(loginRequest());
		const { data } = await axiosInstance.post('/api/v1/user/login', bodyData);
		dispatch(loginSuccess(data));
		console.log('data', data.success);
		if (data.success) {
			navigate('/blog');
		}
	} catch (error) {
		dispatch(
			loginFail(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};
export const signUpDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(signUpRequest());
		const { data } = await axiosInstance.post(
			'/api/v1/user/register',
			bodyData
		);
		dispatch(signUpSuccess(data));
	} catch (error) {
		dispatch(
			signUpFail(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};
export const allBlogDispatch = () => async (dispatch) => {
	try {
		dispatch(allBlogRequest());
		const { data } = await axiosInstance.get('/api/v1/blog/all-blog');
		dispatch(allBlogSuccess(data));
		console.log('data', data);
	} catch (error) {
		dispatch(
			allBlogFail(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};

export default AppReducer;
