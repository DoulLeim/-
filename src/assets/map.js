var map;
var createMap = function (st, searchv) {
    if (st == 0) {
        map = new BMap.Map("allmap");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300, 157));
        var geolocation = new BMap.Geolocation();   //定位
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                var marker2 = new BMap.Marker(r.point, { icon: myIcon });  // 创建标注
                map.addOverlay(marker2);
                map.panTo(r.point);
                map.centerAndZoom(r.point, 16);
                var local = new BMap.LocalSearch(map, {
                    renderOptions: { map: map }
                });
                local.search("影院")
            }
            else {
                alert('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true })
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        // ========添加控件
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 添加定位控件
        var geolocationControl = new BMap.GeolocationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT });
        geolocationControl.addEventListener("locationSuccess", function (e) {
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            var local = new BMap.LocalSearch(map, {
                renderOptions: { map: map }
            });
            local.search("影院")
        });
        geolocationControl.addEventListener("locationError", function (e) {
            // 定位失败事件
            alert(e.message);
        });
        map.addControl(geolocationControl);
        // map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));        //缩放比例
        map.addControl(new BMap.OverviewMapControl()); //缩放按钮
        // map.addControl(new BMap.MapTypeControl()); //卫星图
        map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
    } else if (st === 1) {
        var local = new BMap.LocalSearch(map, {
            renderOptions: { map: map ,panel: "results"}
        });
        local.search(searchv)
    }else if(st === 2){
        
    }

    console.log(map);

}

export default {
    createMap,
    // findCinema
}
// mounted() {
//     this.$nextTick(function() {
//       MP("oWk8ofl3pI7jt4P9nng4cw2zyOQhY3pi").then(BMap => {
//         var th = this;
//         var map = new BMap.Map("allmap"); // 创建Map实例
//         var point = new BMap.Point(113.64964385, 34.75661006); // 创建点坐标
//         map.centerAndZoom(point, 12);
//         map.enableScrollWheelZoom();
//         map.addControl(new BMap.GeolocationControl()); //定位
//         var myValue;
//         myValue = this.province + this.city + "" + "" + this.name; //传入相应参数 省、市、区、街道、名称 （内容可以为空）
//         setPlace();
//         var ac = new BMap.Autocomplete({
//           //建立一个自动完成的对象
//           input: "suggestId",
//           location: map
//         });
//         var myValue;
//         ac.addEventListener("onconfirm", function(e) {
//           //鼠标点击下拉列表后的事件
//           var _value = e.item.value;
//           myValue =
//             _value.province +
//             _value.city +
//             _value.district +
//             _value.street +
//             _value.business;
//           this.address_detail = myValue;
//           setPlace();
//         });
//         function setPlace() {
//           map.clearOverlays(); //清除地图上所有覆盖物
//           function myFun() {
//             th.userlocation = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
//             map.centerAndZoom(th.userlocation, 16);
//             map.addOverlay(new BMap.Marker(th.userlocation)); //添加标注
//           }
//           var local = new BMap.LocalSearch(map, {
//             //智能搜索
//             onSearchComplete: myFun
//           });
//           local.search(myValue);
//           //测试输出坐标（指的是输入框最后确定地点的经纬度）
//           map.addEventListener("click", function(e) {
//             //经度
//             console.log(th.userlocation.lng);
//             //维度
//             console.log(th.userlocation.lat);
//           });
//         }
//       });
//     });
//   },

//   methods: {

//     sad() {
//       let map = new BMap.Map("allmap"); // 创建Map实例
//       map.centerAndZoom(new BMap.Point(113.64964385, 34.75661006), 10);
//       map.enableScrollWheelZoom(true);
//       map.clearOverlays();
//       console.log(data.result.location.lng);
//       console.log(data.result.location.lat);
//       let new_point = new BMap.Point(
//         data.result.location.lng,
//         data.result.location.lat
//       );
//       let marker = new BMap.Marker(new_point); // 创建标注
//       map.addOverlay(marker); // 将标注添加到地图中
//       map.panTo(new_point);
//       map.setCurrentCity(this.province); // 设置地图显示的城市 此项是必须设置的
//     }
//   }
// };








// var geolocation = new BMap.Geolocation();
//     geolocation.getCurrentPosition(function (r) {
//         if (this.getStatus() == BMAP_STATUS_SUCCESS) {
//             var mk = new BMap.Marker(r.point);
//             map.addOverlay(mk);
//             map.panTo(r.point);
//             map.centerAndZoom(r.point, 11);
//             var local = new BMap.LocalSearch(map, {
//                 renderOptions: { map: map }
//             });
//             local.search("影院")
//             var options = {
//                 onSearchComplete: function(results){
//                     // 判断状态是否正确
//                     if (local.getStatus() == BMAP_STATUS_SUCCESS){
//                         var s = [];
//                         for (var i = 0; i < results.getCurrentNumPois(); i ++){
//                             s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
//                         }

//                         console.log(s);
//                         return s
//                         // document.getElementById("r-result").innerHTML = s.join("<br/>");
//                     }
//                     console.log("b",s);
//                 }     
//             };
//             var local = new BMap.LocalSearch(map, options);
//             local.search("影院");
//             // alert('您的位置：'+r.point.lng+','+r.point.lat);
//         }
//         else {
//             // alert('failed'+this.getStatus());
//         }

//     }, { enableHighAccuracy: true })