<template>
	<!-- Login Form -->
	<div class="text-white text-center font-bold p-4 mb-4" v-if="login_show_alert" :class="login_alert_variant">
		{{ login_alert_msg }}
	</div>
	<vee-form :validation-schema="loginSchema" @submit="login">
		<!-- Email -->
		<div class="mb-3">
			<label class="inline-block mb-2">Email</label>
			<vee-field
				type="email"
				name="email"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
				placeholder="Enter Email"
			/>
			<ErrorMessage class="text-red-600" name="email" />
		</div>
		<!-- Password -->
		<div class="mb-3">
			<label class="inline-block mb-2">Password</label>
			<vee-field
				type="password"
				name="password"
				class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
				placeholder="Password" autocomplete="on"
			/>
			<ErrorMessage class="text-red-600" name="password" />
		</div>
		<button
			type="submit"
			:disabled="login_in_submission"
			class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700"
		>
			Submit
		</button>
	</vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:3|max:32',
      },
      // it disables the submit button, while the form is submitting the data, to prevent excesive requests
      login_in_submission: false,

      // used to toggle the alert's visibility.
      login_show_alert: false,

      // will change the color of the alert.
      login_alert_variant: 'bg-blue-500',

      // the message inside of the alert.
      login_alert_msg: 'Please wait! We are logging you in.',
    };
  },
  methods: {
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_msg = 'Please wait! We are logging you in.';

      try {
        await this.$store.dispatch('login', values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = 'bg-red-500';
        this.login_alert_msg = 'Invalid login details';
        // we need to return the function to stop it from further execution
        return;
      }

      //  create a dummy response to let the user know their login was a success.
      this.login_alert_variant = 'bg-green-500';
      this.login_alert_msg = 'Success! You are now logged in!';

      // this will help us verify that the function was executed if the validation was successful.
      // console.log(values);
      window.location.reload();
    },
  },
};
</script>
