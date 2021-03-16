<template>
  <div>
    <div id="header-editor" style="background-color: white;">

      
      <div class="row px-5 justify-content-between align-items-center">
        <div class="col-auto row">
            <div class="col-auto px-3">
              <h4>Direito Institucional</h4>
              <h5>Tópicos de Direito Público e Privado >> Semana 2 >> Noções de Direito</h5>
            </div>
        </div>
        <div class="col-auto row">
         <div class="col-auto">
            <button class="btn btn-secondary">Cancelar</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>
      
      
      <div id="toolbar-node" class="ql-toolbar ql-snow col-12" ref="toolbarNode" style="background-color: white; display: flex; justify-content: center">
        <span class="ql-formats">
          <select class="ql-font" defaultValue="arial">
            <option value="arial">Arial</option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
          </select>
          <select class="ql-size" defaultValue="medium">
            <option value="extra-small">Size 1</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold" />
          <button class="ql-italic" />
          <button class="ql-underline" />
          <button class="ql-strike" />
        </span>
        <span class="ql-formats">
          <select class="ql-align" />
          <select class="ql-color" />
          <select class="ql-background" />
        </span>
        <span class="ql-formats">
          <button class="ql-list" value="ordered" />
          <button class="ql-list" value="bullet" />
          <button class="ql-indent" value="-1" />
          <button class="ql-indent" value="+1" />
        </span>
        <span class="ql-formats">
          <button class="ql-script" value="super" />
          <button class="ql-script" value="sub" />
          <button class="ql-blockquote" />
          <button class="ql-direction" />
        </span>
        <span class="ql-formats">
          <button class="ql-link" />
          <button class="ql-image" />
          <button class="ql-video" />
        </span>
        <span class="ql-formats">
          <button class="ql-formula" />
          <button class="ql-code-block" />
          <button class="ql-clean" />
        </span>
      </div>
    </div>
    <div class="simple-editor row justify-content-center py-2" style="height: 80vh; overflow-y: auto;">
      <div id="editor-node" ref="editorNode" style="width: 70vw; height: 100vh; background-color: white; padding: 50px;"></div>
    </div>
  </div>
</template>

<script>
import Quill from "quill";

export default {
  props: {
    value: {
      default: "",
      type: String,
    },
  },

  data() {
    return {
      editorContent: null,
      editorInstance: null,
      editorOpts: {
        theme: "snow",
        modules: {
          toolbar: '#toolbar-node',
        },
        formats: [
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "align",
          "strike",
          "script",
          "blockquote",
          "background",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "color",
          "code-block"
        ]
      },
    };
  },

  watch: {
    value(newVal) {
      console.log(newVal);
      if (newVal !== this.editorContent) {
        this.value = newVal;
      }
    },
  },

  mounted() {
    this.initializeEditor();
  },

  beforeDestroy() {
    this.editorInstance.off("text-change");
  },

  methods: {
    initializeEditor() {
      // Set initial content that's going to be picked up by Quill
      this.$refs.editorNode.innerHTML = this.value;
      // Create the Quill instance
      this.editorInstance = new Quill(this.$refs.editorNode, this.editorOpts);

      const Font = Quill.import("formats/font");
      Font.whitelist = [
        "arial",
        "comic-sans",
        "courier-new",
        "georgia",
        "helvetica",
        "lucida"
      ];
      Quill.register(Font, true);

      const Size = Quill.import("formats/size");
      Size.whitelist = [false, "small", "medium", "large"];
      Quill.register(Size, true);

      // Setup handler for whenever things change inside Quill
      this.editorInstance.on("text-change", this.onEditorContentChange);
      // Save any initial content to this.editorContent
      this.setEditorContent();
    },

    onEditorContentChange() {
      // Whenever we change anything, update this.editorContent
      this.setEditorContent();
      // Then emit its value as input so we have a working v-model
      // This $emit will be catched up in the watch:value
      // that's why we guard against calling pasteHTML
      // calling that function while we are typing is undesirable
      this.$emit("input", this.editorContent);
    },
    setEditorContent() {
      this.editorContent = this.editorInstance.getText().trim()
        ? this.editorInstance.root.innerHTML
        : "";
    },
  },
};
</script>
<style lang="scss">
@import "~quill/dist/quill.snow.css";

b,
strong {
  font-weight: bold;
}

.ql-fon-arial {
  font-family: Arial;
}
.ql-font-comic-sans {
  font-family: 'Comic Sans';
}
.ql-font-courier-new {
  font-family: 'Courier New';
}
.ql-font-georgia {
  font-family: Georgia;
}
.ql-font-helvetica {
  font-family: Helvetica;
}
.ql-font-lucida {
  font-family: Lucida;
}
</style>