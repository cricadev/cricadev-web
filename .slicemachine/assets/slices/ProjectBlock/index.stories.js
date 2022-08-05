import MyComponent from '../../../../slices/ProjectBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ProjectBlock'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"These","spans":[]}],"description":[{"type":"paragraph","text":"Dolore consequat est laboris tempor sit occaecat aliquip et quis. Id quis labore nulla nisi do duis nisi nisi do in ex.","spans":[]}]},"slice_type":"project_block","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
