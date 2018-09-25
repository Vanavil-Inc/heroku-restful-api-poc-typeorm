import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Account {

    @Column()
    shippinglongitude:number;
        
    @Column()
    shippingstate:string;

        
    @Column()
    shippingpostalcode:string;
        
    @Column()
    billingcity:string;
        
    @Column()
    billinglatitude:number;
        
    @Column()
    accountsource:string;
    
    @Column()
    shippingcountry:string;
    
    @Column()
    shippinggeocodeaccuracy:string;

    @Column()
    name:string;
        
    @Column()
    lastmodifieddate:Date;
        
    @Column()
    phone:string | null;
        
    @Column()
    isdeleted:boolean;
        
    @Column()
    systemmodstamp:Date;
        
    @Column()
    lastmodifiedbyid:string;
        
    @Column()
    shippingstreet:string;
        
    @Column()
    billingpostalcode:string;
        
    @Column()
    billinglongitude:number;
        
    @Column()
    createddate:Date;
        
    @Column()
    billingstate:string;
         
    @Column()
    shippingcity:string;
    
    @Column()
    shippinglatitude:number;

    @Column()
    type:string; 

    @Column()
    billingcountry:string;
        
    @Column()
    description:string;
        
    @Column()
    billinggeocodeaccuracy:string;
        
    @Column()
    fax:string;

    @Column()
    sicdesc:string;
        
    @Column()
    billingstreet:string;
    
    @Column()
    sfid:string;
        
    @PrimaryGeneratedColumn()
    id:number;
        
    @Column()
    _hc_lastop:string;
        
    @Column()
    _hc_err:string;
        
    @Column()
    numberofemployees:number;
    
    @Column()
    parentid:string;
        
    @Column()
    masterrecordid:string;
        
    @Column()
    ownerid:string;
        
    @Column()
    lastactivitydate:string;
        

    @Column()
    createdbyid:string;
    
    @Column()
    website:string;
    
    @Column()
    photourl:string;

    @Column()
    industry:string;
        
}