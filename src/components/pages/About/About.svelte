<script lang="ts">
    import { Route } from "tinro"
    import Bg from "../../../assets/company/companybg.jpg"
    import Footer from "../Home/components/Footer.svelte"
</script>
<div class="main">
    <div class="background">
        <img class="img" src={Bg} alt="">
    </div>
    <div>
        <h2 class="team">ROT</h2>
        <h3>About Us</h3>
    </div>
    <div>
        <p class="abtus">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum vitae delectus optio fugiat iste odio nobis earum magni assumenda fuga, nihil excepturi temporibus, est nostrum possimus reiciendis quis incidunt?
        Dolorum esse reiciendis rem, a enim provident qui dignissimos, saepe fuga harum commodi vitae tenetur, porro atque quisquam ad? Voluptatem dolore ratione quae exercitationem expedita quisquam sint perspiciatis debitis incidunt?
        Sint perferendis quidem explicabo corporis provident officia dignissimos quaerat quibusdam recusandae! Exercitationem, eaque fugiat labore id illum, enim consectetur neque itaque magnam impedit consequatur perspiciatis ut mollitia ipsum iste? Ducimus.
        Iste consectetur quidem ab amet fugit laudantium voluptatibus architecto nisi odit eos. Alias excepturi molestias tenetur possimus dolore, nemo atque molestiae ipsum impedit, consequuntur eum quam inventore error harum corrupti.</p>
    </div>
    <div>
        <Route>
            <Footer bgColor="black"/>
        </Route>
    </div>
</div>


<style>
    .main{
        display: grid;
        grid-template-rows:300px 80px 240px;

    }
    .background{
        overflow-y: hidden;
    }
</style>