<script type="text/javascript">
// Wait for the plugin to be injected by the dev server
setTimeout(() => {
  window.editor = grapesjs.init({
    height: '100%',
    container: '#gjs',
    showOffsets: true,
    fromElement: true,
    noticeOnUnload: false,
    storageManager: false,
    plugins: ['konetify-tailwind'],
    pluginsOpts: {
      'konetify-tailwind': { /* Test here your options  */ }
    }
  });
}, 100);
</script>