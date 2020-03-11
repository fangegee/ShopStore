<template>
  <div>
    <h1>我是分类页</h1>
    <!-- <Footer></Footer> -->
  </div>
</template>
<script src="https://cdn.bootcss.com/qs/6.7.0/qs.min.js"></script>
<script>
// import Footer from '../components/Footer.vue';
import qs from 'qs';
export default {
  components: {
    // Footer
  },
  // http://www.vlethe.com/index.php?r=class/category&type=1
  mounted: function() {
    // var qs = Qs;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    let data = { client_id: '180100031051', channel_id: '2110.0001', webp: '1', page_type: 'home' };

    this.$axios
      .post(
        'https://m.mi.com/v1/home/page',
        this.$qs.stringify({
          client_id: '180100031051',
          channel_id: '2110.0001',
          webp: '1',
          page_type: 'home'
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then(res => {
        console.log('res', res);
      });

    // this.$axios
    //   .post(
    //     'https://m.mi.com/v1/apkversion/download_guide?version=2',
    //     this.$qs.stringify(
    //       {
    //         client_id: 180100031051,
    //         channel_id: 2110.0001,
    //         webp: 1,
    //         page_type: 'home'
    //       },
    //       { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    //     )
    //   )
    //   .then(response => {
    //     console.log(response.data, '获取成功');
    //   })
    //   .catch(error => {
    //     alert(error, 'error');
    //   });

    // let params = {
    //   client_id: '180100031051',
    //   channel_id: '2110.0001',
    //   webp: '1',
    //   page_type: 'home'
    // };
    // this.$axios
    //   .post('https://m.mi.com/v1/home/page', this.$qs.stringify(params), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
    //   .then(response => {
    //     console.log(response, '获取成功');
    //   })
    //   .catch(error => {
    //     alert(error, 'error');
    //   });

    // this.$axios
    //   .post('https://m.mi.com/v1/home/page', qs.stringify({ client_id: 180100031051, channel_id: 2110.0001, webp: 1, page_type: 'home' }))
    //   .then(response => {
    //     console.log(response, '请求成功');
    //   })
    //   .catch(error => {
    //     console.log(error, 'error');
    //   });
  }
};
</script>
<style lang="scss" scoped>
</style>