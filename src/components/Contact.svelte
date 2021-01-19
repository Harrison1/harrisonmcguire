<script>
  import Mail from './icons/Mail.svelte'
  import User from './icons/User.svelte'
  import Gift from './icons/Gift.svelte'
  import MapPin from './icons/MapPin.svelte'
  import SectionTitle from './SectionTitle.svelte'

  const birthday = new Date('June 30, 1987')

  const calculateAge = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const age = calculateAge(birthday)

</script>

<style>
  .grid {
    height: 100px;
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    grid-gap: 20px;
    font-size: 22px;
    margin: auto;
    padding: 20px;
  }
</style>

<article>
  <SectionTitle text='Contact' />
  <span class='grid'><User /> Harrison McGuire</span>
  <span class='grid'><MapPin /> Location: South Florida</span>
  <span class='grid'><Gift /> Age: { age }</span>
  <span class='grid'><Mail /> hmcguire13@gmail.com</span>
</article>
