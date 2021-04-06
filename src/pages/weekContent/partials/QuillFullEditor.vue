<template>
  <div id="full-editor">
    <div id="header-editor" class="row justify-content-center">
      <div class="col-12 row py-2 justify-content-center">
        <div
          class="col-10 row justify-content-between align-items-center"
        >
          <div class="col-6 row">
            <div class="col-10 row border-red">
              <div class="border-red col-4"> IMG </div>
              <div class="border-blue col-8">
                <h4>Novo Documento</h4>
              </div>
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
      </div>

      <div
        id="toolbar-node"
        class="ql-toolbar ql-snow col-12 row justify-content-center"
        ref="toolbarNode"
      >
        <div class="col-10 row justify-content-center py-1">
          <div class="col-auto ql-formats">
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
          </div>
          <div class="col-auto ql-formats">
            <button class="ql-bold" />
            <button class="ql-italic" />
            <button class="ql-underline" />
            <button class="ql-strike" />
          </div>
          <div class="col-auto ql-formats">
            <select class="ql-align" />
            <select class="ql-color" />
            <select class="ql-background" />
          </div>
          <div class="col-auto ql-formats">
            <button class="ql-list" value="ordered" />
            <button class="ql-list" value="bullet" />
            <button class="ql-indent" value="-1" />
            <button class="ql-indent" value="+1" />
          </div>
          <div class="col-auto ql-formats">
            <button class="ql-script" value="super" />
            <button class="ql-script" value="sub" />
            <button class="ql-blockquote" />
            <button class="ql-direction" />
          </div>
          <div class="col-auto ql-formats">
            <button class="ql-link" />
            <button class="ql-image" />
            <button class="ql-video" />
          </div>
          <div class="col-auto ql-formats">
            <button class="ql-formula" />
            <button class="ql-code-block" />
            <button class="ql-clean" />
          </div>
        </div>
      </div>
    </div>
    <div class="simple-editor col-12 row justify-content-center py-2">
      <div
        class="col-8 page-editor"
        id="editor-node"
        ref="editorNode"
      ></div>
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
          toolbar: "#toolbar-node",
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
          "code-block",
        ],
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
        "lucida",
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

.border-red {
  border: 1px solid red;
}

.border-blue {
  border: 1px solid blue;
}

#full-editor {
  #header-editor {
    background-color: white;

    #toolbar-node {
      background-color: white;
    }
  }

  .simple-editor {
    overflow-y: auto;
    max-height: 80vh;

    .page-editor {
      background-color: white;
      padding: 50px;
    }

    #editor-node {
      min-height: 100vh;

      .ql-editor {
        min-width: 100vh;
      }

      b,
      strong {
        font-weight: bold;
      }
      .ql-font-arial {
        font-family: Arial;
      }
      .ql-font-comic-sans {
        font-family: "Comic Sans";
      }
      .ql-font-courier-new {
        font-family: "Courier New";
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
    }
  }
}
</style>