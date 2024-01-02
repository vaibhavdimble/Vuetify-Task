import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    username: '',
    mobile: '',
    role: '',
    email: '',
    profile: [],
  }),
  actions: {
    saveUserData(data) {
      this.username = data.username;
      this.mobile = data.mobile;
      this.role = data.role;
      this.email = data.email;
      this.profile = data.profile;
      // console.log(this.saveUserData)
    },
  },
 
});
