import Quill from 'quill'

const quill_options = {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean'],
      ['link', 'image', 'video'],
      [{ 'direction': 'rtl' }]
    ]
  }
}

let value = "";

this.$refs.editorNode.innerHTML = this.value;

editor = new Quill(this.$refs.editorNode, quill_options);

export default editor;
