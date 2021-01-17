<template>
    <div id="CMS" class="Application-height p-0 responsive-page .container-fluid bg-color-darkblue">
       <div class="row">
         <div  class="col-3">
            <Sidebar></Sidebar>
         </div>
         <div  class="col-9">
            <Body></Body>
         </div>
       </div>
    </div>
</template>

<script>
import Body from './TextEditor/widgets/Body'
import Sidebar from './TextEditor/widgets/Sidebar'

export default {
      components:{
        Body,
        Sidebar
      }
}
</script>

<style>

</style>