
            var user = prompt("Do you want to go to lunch?").toUpperCase();

            switch (user)
            {
                case 'YES':
                    var where = prompt("What floor?").toUpperCase();
                    if (where === "15")
                    {
                        var food = prompt("BBQ, TACOS or HOTDOGS?").toUpperCase();
                    }
                    else
                    {
                        alert("Okay I guess we'll go with the lame food...");
                    }
                    if (food === "BBQ" || food === "TACOS" || food === "HOTDOGS")
                    {
                        alert("That's what i'm talking about!");
                    }
                    else 
                    {
                        alert("Nooooooooooooooo......");
                    }
                    break;
                case 'NO':
                    var breakfast = prompt("Did you eat a late breakfast?").toUpperCase();
                    var crazy = prompt("Are you on a diet?").toUpperCase();
                    if (breakfast === "YES" && crazy === "YES")
                    {
                        alert("You son of a...");
                    }
                    else if (breakfast === "YES" && crazy === "NO" || breakfast === "NO" && crazy === "YES" || breakfast === "NO" && crazy === "NO")
                    {
                        alert("Too bad, lets eat!");
                    }
                    else
                        {
                            alert("That doesn't make sense!")
                        }
                    break;
                case 'MAYBE':
                    var what = prompt("No maybe's, YES or NO").toUpperCase();
                    if (what === "YES")
                    {
                        location.reload();
                    }
                    else
                    {
                        alert("Okay let me know when.");
                    }
                    break;
                default:
                    alert("YES or NO only, try again.").toUpperCase();
            }
