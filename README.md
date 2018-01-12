## jTyper

This is a jQuery plugin for typing links


### How to use ?

Add jTyper css file between html head tag :

``` html
<link rel="stylesheet" href="assets/jTyper.css">
```

Add latest version of jQuery and jTyper at end line of html body tag :

``` html
<script src="assets/jquery-3.2.1.min.js"></script>
<script src="assets/jTyper.1.0.0.js"></script>
```

Now create a list with ul and call jTyper :

``` html

<ul>
    <li>
        <a href="http://jquery.com/">jQuery is a fast and small JavaScript library.</a>
    </li>
    <li>
        <a href="https://reactjs.org/">React is a JavaScript library for building user interfaces.</a>
    </li>
    <li>
        <a href="http://getbootstrap.com/">Bootstrap is a free framework for designing web pages.</a>
    </li>
</ul>

<script>
    $(document).ready(function(){
        $('ul').jTyper();
    });
</script>
```

### Options

speed ( Typing Speed / Default = 100 )

timeout ( Waiting time for typing next link / Default = 3000 )
