<script>
  export let pict = 'cat',
    alt = 'cat',
    pictureClass,
    imgClass;
</script>

<picture class={pictureClass}>
  <source srcset={`${pict}.webp`} type="image/webp" />
  <source srcset={`${pict}.png`} type="image/png" />
  <img class={imgClass} src={`${pict}.png`} {alt} />
</picture>
