 const p1 = require("../DbConnection/postgresdb");
 const c1 = p1.connectionObject();


const funct1 = (req, res) => {
    console.log("Function 1 called!");
    res.send("Function 1 Respond!");
    };
const funct2 = (req, res) => {
    console.log("Function 2 called!");
    res.send("Function 2 Respond!");
    };

const funct3 = (req, res) => {
    try{
        c1.query(
            "INSERT INTO public.player1(pl_nm, pl_run, pl_country)VALUES('ajay', 100, 'india'); ",
            (error, result) => {
                if (error) {
                    throw error;
                }
                res.status(500).send("Data Inserted Successfully");
            }         
            );
        } catch {
            console.log("Error in Inserting Data");
            res.status(500).send("Internal Server Error");
        }
        
    }

    const funct4 = (req, res) => {
        try{
            c1.query("SELECT * from  public.player1",(error, result) =>{ 
                    if (error) console.log(error);
                    else{
                        console.log("Inserted player data Successfully");
                        res.send(result.rows);
                    }
                });
            } catch {
                console.log("Error in Function 4");
                res.status(500).send("Internal Server Error");
            }
        }


        const funct5 = (req, res) => {
            try {
                var v1 = req.body.var1;
                var v2 = req.body.var2;
                var v3 = req.body.var3;
                console.log (v1, v2, v3);

                c1.query(`INSERT INTO public.player1(pl_nm, pl_run, pl_country)VALUES('${v1}','${v2}', '${v3}');` ,(error, result) => {
                    console.log(result);
                    if (error) console.log(error); 
                    else {
                        console.log("Update Player Data Successfully");
                        res.send("Data Update Successfully");
                    }
                });
            } catch (error) {
                console.log("Error in Function 5");
                res.status(500).send("Internal Server Error");
            }
        }

        const functUpdate = (req, res) => {
            try {
                var v1 = req.body.var1; // New Name
                var v2 = req.body.var2; // New Runs
                var v3 = req.body.var3; // Player ID (Assuming this is the identifier)
                console.log(v1, v2, v3);
        
                // Check if any value is undefined or null
                if (v1 === undefined || v2 === undefined || v3 === undefined) {
                    return res.status(400).send("All fields (var1, var2, var3) are required!");
                }
        
                c1.query(
                    `UPDATE public.player1 SET pl_nm = $1, pl_run = $2 WHERE pl_country = $3;`,
                    [v1, v2, v3], // Use parameterized query to prevent SQL injection
                    (error, result) => {
                        if (error) {
                            console.log("Database Error:", error);
                            return res.status(500).send("Database Error");
                        }
                        console.log("Player Data Updated Successfully");
                        res.send("Data Updated Successfully");
                    }
                );
            } catch (error) {
                console.log("Error in functUpdate:", error);
                res.status(500).send("Internal Server Error");
            }
        };
        





    module.exports = {
        funct1,
        funct2,
        funct3,
        funct4,
        funct5,
        functUpdate
    }