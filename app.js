var app = angular.module('StarterApp', ['ngMaterial','ngMdIcons']);

app.controller('AppCtrl', ['$scope','$mdBottomSheet','$mdSidenav','$mdDialog', function($scope,$mdBottomSheet,$mdSidenav,$mdDialog){
	$scope.toggleSidenav = function (menuId){
		$mdSidenav(menuId).toggle();
	};

	$scope.menu =[{
			link:'',
			title:'Inicio',
			icon:'dashboard'
		},
		{
			link:'',
			title:'Rockers',
			icon:'group'
		},
		{
			link:'',
			title:'Mensajes',
			icon:'message'
		}
	

	]; 
	$scope.admin=[{
		link:'',
		title:'Borrar',
		icon:'delete'
	},{
	link:'showListBottomSheet($event)',	
	title:'Configuracion',
	icon:'settings'},
	]
	$scope.showListBottomSheet = function($event){
		$scope.alert='';
	$mdBottomSheet.show({
		template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item></md-list></md-bottom-sheet>',
		controller:'ListBottomSheetCrtl',
		targetEvent:$event
		}).then(function(clickedItem){
			$scope.alert = clickedItem.name + 'es magique';
		});
	};

}]);


app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet){
  $scope.items=[
  { name: 'Compartir', icon:'share'},
  { name: 'Upload', icon:'upload'},
  { name: 'Copy', icon:'copy'},
  { name: 'Imprimir', icon:'print'},
  ];
  $scope.listItemClick = function($index){
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});	
