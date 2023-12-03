import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class Card{
    mahsolantekhabi:any
     list=[{
        id:1,
        image:"https://dkstatics-public.digikala.com/digikala-products/73e78300ba30e5c11fc3af7ce354d27de4849a05_1675804264.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        title:"شلف دیواری خونه خاص مدل شش ضلعی",
        price:"89,000" ,
        Description:"شکل محصول : شش ضلعی"
    },
    {
        id:2,
        image:"https://dkstatics-public.digikala.com/digikala-products/71ce476d9e3a140b69276c7bc2ea941e9f225389_1669549230.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        title:"MS1 طبقه دیواری مدل ",
        price:"800,000",
        Description:"امکانات طبقه دیواری : قابلیت سرهم کردن"
    },
    {
        id:3,
        image:"https://dkstatics-public.digikala.com/digikala-products/3b0b58cfebedd3ad97cf38dcf92d80f9803824ac_1658381560.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        title:"DLF72M شلف دیواری مدل ",
        price:"792,000",
        Description:"شکل محصول : مستطیل"
    },
]
     gets(){
        return this.list
     }
     mahsolentekhabi(kalanumber:any){
        console.log(kalanumber);
        this.mahsolantekhabi =kalanumber

        
        
     }
}