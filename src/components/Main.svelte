<script>
  import { showSideBar, avatar, isEnglish } from './stores.js';

  function changeLanguage() {
    isEnglish.update((n) => !isEnglish); // logs '2'
  }

  function hideSideBar() {
    showSideBar.set(false);
  }
</script>
