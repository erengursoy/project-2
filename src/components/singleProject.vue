<tamplate>
<div class="questionItem">
  <div class="actions">
    <h3>{{questionItem.question}}</h3>
  </div>
  <div class="details">
    <p>{{questionItem.question}}</p>
  </div>
</div>
</tamplate>
<script>
export default {
  name: 'SingleProject',
  props:['questionItem']
};
</script>
