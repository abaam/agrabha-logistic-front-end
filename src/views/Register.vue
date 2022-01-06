<template>
    <div class="flex items-center min-h-screen">
        <div class="w-0 lg:w-1/3">
            <img class="min-h-screen object-cover z-0" src="img/login-image.png" alt="">
        </div>
        <div class="w-full lg:w-2/3 px-6 md:px-12 lg:px-16">
            <img src="img/agrabah-logo.png" class="h-20 mb-8" alt="">

            <h1 class="text-4xl text-blue font-bold py-4 border-b uppercase">Agrabah Logistics Registration</h1>

            <Form @submit="register" :validation-schema="schema" v-slot="{ errors }">
                <div class="mt-10 space-y-4">
                    <label class="block text-sm font-medium">Phone Number</label>
                    <Field 
                        v-model="state.phone_number"
                        v-bind:class="{ 'border border-red-400': errors['phone_number'] }"
                        type="text"
                        as="input"
                        id="phone-number"
                        name="phone_number"
                        label="Phone number" 
                        class="rounded w-full"
                    />

                    <div class="text-purple-500 phone-number-error">
                        {{ errors.phone_number }}
                    </div>

                    <div class="text-purple-500 phone-number-error"
                    v-bind:class="{ 'hidden': errors['phone_number'] }">
                        {{ uniquePhoneNumber }}
                    </div>

                    <label class="block text-sm font-medium">Password</label>
                    <Field 
                        v-model="state.password"
                        v-bind:class="{ 'border border-red-400': errors['password', 'retype_password'] }"
                        type="password"
                        as="input"
                        id="password"
                        name="password"
                        label="Password" 
                        class="rounded w-full"
                    />

                    <div class="text-purple-500">
                        {{ errors.password }}
                    </div>

                    <label class="block text-sm font-medium">Re-type Password</label>
                    <Field 
                        v-model="state.retype_password"
                        v-bind:class="{ 'border border-red-400': errors['retype_password'] }"
                        type="password"
                        as="input"
                        id="retype-password"
                        name="retype_password"
                        label="Re-type Password" 
                        class="rounded w-full"
                    />

                    <div class="text-purple-500">
                        {{ errors.retype_password }}
                    </div>

                    <label class="block text-sm font-medium">Register As</label>
                    <Field as="select"
                    v-model="state.register_as"
                        id="register-as"
                        name="register_as"
                        label="Register As"
                        class="rounded w-full"
                    >
                    <option value="1">Driver</option>
                    <option value="2">Customer</option>
                    </Field>

                    <div>
                        <ButtonSolidBlue type="submit" class="w-full" buttonText="Register" />
                    </div>

                    <div class="text-sm">
                        Already have an account?
                        <router-link to="/login" class="font-medium text-blue-light hover:text-blue">Sign In</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { LockClosedIcon } from '@heroicons/vue/solid'
    import Input from '../components/Input'
    import SelectInput from '../components/SelectInput'
    import ButtonSolidBlue from '../components/buttons/ButtonSolidBlue'
    import { reactive } from "vue";
    import { Form, Field } from "vee-validate";
    import * as yup from "yup";
    import axios from 'axios';

    export default {
        components: {
            LockClosedIcon,
            Input,
            ButtonSolidBlue,
            SelectInput,
            Form,
            Field,
        },

        data() {
            return {
                uniquePhoneNumber: '',
            };
        },

        setup() {
            const state = reactive({
                phone_number: '',
                password: '',
                retype_password: '',
                register_as: '1',
            });

            const schema = yup.object().shape({
            phone_number: yup
                .string()
                .required("Phone number is required")
                .matches(
                /^(09|\+639)\d{9}$/,
                "Phone number is not valid"
                ),
            password: yup
                .string()
                .min(6, 'Password must be at least 6 characters').required("Password is required"),
            retype_password: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match'),
            });
            //some other function
            return {
                state,
                schema,
            };
        },

        methods: {
            register(){
                let self = this
                axios.post(process.env.VUE_APP_API + "register", {
                    phone_number: this.state.phone_number,
                    password: this.state.password,
                    register_as: this.state.register_as
                })
                .then(() => {
                    this.$router.push("/dashboard");
                })
                .catch(function (error) {
                    if (error.response) {
                        self.uniquePhoneNumber = error.response.data.errors.phone_number[0];
                    }
                })
            }
        },
    }
</script>