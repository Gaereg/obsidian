var obsiAppCtrl = angular.module('obsiAppCtrl', []);

obsiApp.controller('navCtrl', ['$scope', '$location', function($scope, $location){
  $scope.items = [
    {path: 'bio', title: 'BIO'},
    {path: 'photos', title: 'PHOTOS'},
    {path: 'music', title: 'MUSIC'},
    {path: 'videos', title: 'VIDEOS'},
    {path: 'news', title: 'NEWS'},
    {path: 'tour', title: 'TOUR'},
    {path: 'contact', title: 'CONTACT'}
  ];
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1);
        return page === currentRoute ? 'active' : '';
    };        
}])

obsiApp.controller('lecteurCtrl', ['$scope','$interval', function($scope, $interval){
	$scope.songs = [
		{artiste: 'News Kingston', titre: 'Today'}
	];
	$scope.playPause = 'fa fa-play';
	$scope.music = document.getElementById("music");
	$scope.volumeSlide = document.getElementById("volumeSlider");
	$scope.progressBar = document.getElementById("durationSlider");
	$scope.autoBar = $interval(function(){
			$scope.progressBar.value = $scope.music.currentTime;
		}, 500);
	$scope.initBar = $scope.progressBar.setAttribute('max', $scope.music.duration);

	$scope.classPlay = function() {
		if($scope.playPause === 'fa fa-play'){
			$scope.playPause = 'fa fa-pause';
			$scope.music.play();
		} else {
			$scope.playPause = 'fa fa-play';
			$scope.actif--;
			$scope.music.pause();
		}
	}
	$scope.volumeChange = function(){
		$scope.music.volume = $scope.volumeSlide.value;
	}
	$scope.mute = function(){
		$scope.volumeSlide.value = 0;
		$scope.volumeChange();
	}
	$scope.durationChange = function(){
		$scope.music.currentTime = $scope.progressBar.value;
	}
	$scope.hoverIn = function(){
		document.getElementById("cadre-volume").style.visibility="visible";
	}
	$scope.hoverOut = function(){
		document.getElementById("cadre-volume").style.visibility="hidden";

	}
}])

