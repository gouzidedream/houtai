/*eslint-disable */ 
export default {
    created() {
        // let txMap = this.$ref.map
        // var map = new qq.maps.Map(document.getElementById("container"), {
        //     // 地图的中心地理坐标。
        //     center: new qq.maps.LatLng(39.916527,116.397128)
        // });
    },
    mounted() {
        this.initmap()
        this.clickmap()
        this.initseachcity()
    },
    data() {
        return {
            // 地图实例
            map: '',
            // 地图搜索
            citylocation: '',
            // 图片展示开关
            dialogVisible: false,
            //  展示图片地址
            dialogImageUrl: '',
            // 实习岗位 填写 资料
            practiceJobForm: {
                // 职位
                title: '',
            },
            serchindex: '',
            searchMapOption: {
                complete: (result) => {
                    this.map.setCenter(result.detail.location);
                    this.serchindex = new qq.maps.Marker({
                        map: this.map,
                        position: result.detail.location
                    });
                }
            }
            
        }
    },
    methods: {
        handlePictureCardPreview(e) {
            this.dialogImageUrl = e.url
            this.dialogVisible = true
        },
        handleRemove() {
            console.log(1)
        },
        initmap() {
            const txMap = this.$refs.map
            this.map = new qq.maps.Map(txMap, {
                // 地图的中心地理坐标。
                center: new qq.maps.LatLng(39.916527,116.397128),
                zoom: 20,
            });
        },
        clickmap() {
            qq.maps.event.addListener(
                this.map,
                'click',
                (event) => {
                    // 缺少定位数组数组
                   
                     new qq.maps.Marker({
                        map: this.map,
                        position: event.latLng
                    });
                }
            )
        },
        initseachcity() {
            
        },
        seachcity() {
            let geocoder = new qq.maps.Geocoder(this.searchMapOption);
            geocoder.getLocation(this.practiceJobForm.title);
        }

    },
}