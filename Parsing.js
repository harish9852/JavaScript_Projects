<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>example on js</title>
</head>
<body>
    <h3>demo on parsing</h3>
    <script>
        let x = "15" ,y = "9" ;
        //auto parse 
        document.write(x-y);
        document.write(y*3, '<br>');
        document.write(x/10, '<br>');
        document.write(++x, '<br>')
        document.write(--y, '<br>');

        //manual parse
        let i = "21", j = "7";
        let s = parse(i) + parse(j);
        document.write(s,'<br>'); // no parse
        document.write(i>j,'<br>'); // no parse
        document.write(+i > +j '<br>'); // exp parse
        document.write(+"10" <= +"6",'<br>'); //exp parse
        let z = "100abc";
        document.write(+"ram", '<br>');
        document.write(+z);
        

    </script>
</body>
</html>