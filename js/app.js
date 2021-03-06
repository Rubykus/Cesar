// создаем модуль и контроллер
angular.module("myApp", ["chart.js"]).controller("BarCtrl", function ($scope) {
  // заносим название полей и их значения в диаграмму
  $scope.labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  $scope.data = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];  
  // функция которая заполняет значение диаграммы при изменение текстового поля 
  $scope.change = function(){
       // обнуляем значение диаграммы
  	   $scope.data = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  	   // создаем переменную и определяем ей текстовое поле, только все символы в нижнем регистре
       var p = $scope.a.toLowerCase();
       var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
       // проверка каждой буквы на соответсвию введеной и обновление значений диаграммы
  	   for (var i = 0; i < p.length; i++) {
  	   	for (var j = 0; j < alph.length; j++){
          if (p[i] == alph[j]) {$scope.data[0][j]++};
        }
  	   };
  };
});

