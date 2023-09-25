export default {
	getLoadedData(state) {
		return state.formData;
	},
	getIsVerifyMachineLoading(state) {
		return state.isVerifyMachineLoading;
	},
	getIsSubmitLoading(state) {
		return state.isSubmitLoading;
	},
	getPreventRedirect(state) {
		return state.preventRedirect;
	},
};
