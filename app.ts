module App {
    angular.module("app", []);

    class MainController {
        public greeting: string = "Hello world";

        static $inject = [];
        constructor() {

        }
    }

    class Main implements ng.IComponentOptions {
        public template:string = "<div><h1>{{$ctrl.greeting}}</h1></div>";
        public controller: any = MainController;
    }

    angular.module("app").component("main", new Main());


}