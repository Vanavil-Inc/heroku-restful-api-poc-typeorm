import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class _trigger_log {

    @PrimaryGeneratedColumn({
   
        name:"id"
        })
    id:number;
        

    @Column("bigint",{ 
        nullable:true,
        name:"txid"
        })
    txid:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        default:"now()",
        name:"created_at"
        })
    created_at:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        default:"now()",
        name:"updated_at"
        })
    updated_at:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"processed_at"
        })
    processed_at:Date | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"processed_tx"
        })
    processed_tx:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:8,
        name:"state"
        })
    state:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:7,
        name:"action"
        })
    action:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:128,
        name:"table_name"
        })
    table_name:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"record_id"
        })
    record_id:number | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:18,
        name:"sfid"
        })
    sfid:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"old"
        })
    old:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"values"
        })
    values:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"sf_result"
        })
    sf_result:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"sf_message"
        })
    sf_message:string | null;
        
}
