var app1 = new Vue({
    el: '#app',
    data: {
        BoolForRegister: false,
        BoolForLogin: true,
        LoginTips: [
            'موارد مربوط به ورود ۱',
            'موارد مربوط به ورود ۲',
            'موارد مربوط به ورود ۳',
            'موارد مربوط به ورود ۴',
        ],
        RegisterTips: [
            'موارد مربوط به ثبت نام ۱ ',
            'موارد مربوط به ثبت نام ۲ ',
            'موارد مربوط به ثبت نام ۳ ',
            'موارد مربوط به ثبت نام ۴ ',
        ],
        UserName: '',
        Email: '',
        CheckBox: ''
    },
    methods: {
        ChangeSections: function() {
            this.BoolForRegister = !this.BoolForRegister
            this.BoolForLogin = !this.BoolForLogin
        },
        CheckFields: function() {
            var username = this.$refs.UserNameRef;
            if (this.UserName === '') {
                username.classList.remove('success')
                username.classList.add('error')
            } else {
                username.classList.remove('error')
                username.classList.add('success')
            }
            var Email = this.$refs.EmailRef;
            if (this.Email === '') {
                Email.classList.remove('success')
                Email.classList.add('error')
            } else {
                Email.classList.remove('error')
                Email.classList.add('success')
            }
            var checkbox = this.$refs.CheckBoxRef
            console.log(this.CheckBox);
            if (this.CheckBox != true) {
                checkbox.classList.add('checkboxerror')
            } else {
                checkbox.classList.remove('checkboxerror')
            }

        }
    },
    watch: {
        UserName: function() {
            this.CheckFields();
        }
    }
});