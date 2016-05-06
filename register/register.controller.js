(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            vm.user.Image="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/User-info.svg/1024px-User-info.svg.png";
            vm.user.Starttime = new Date();
            //console.log(vm.user);
            UserService.Create(vm.user)
                .then(function (response) {
//                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
//                    } else {
//                        FlashService.Error(response.message);
//                        vm.dataLoading = false;
//                    }
                });
        }
    }

})();
