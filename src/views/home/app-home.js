(function(){
  Polymer({
    is: 'app-home',
    properties:{
      news:{
        type: Array,
        value:[]
      },
      sliderImage:{
        type: Array
      },
      imagesSize:{
        type: Number,
        computed: '_imageSize(sliderImage)'
      }
    },
    _imageSize: function(array){
      console.log(array.length);
      return array.length;
    }
  });
}());
