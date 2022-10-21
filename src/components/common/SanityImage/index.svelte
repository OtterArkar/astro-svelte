<script>
  import getImageProps from './getImageProps';
	export let image;

</script>

<img
  src={image.url}
  class='aspect-video object-contain max-h-[200px]'
  alt={image.alt || " "}
 
/>