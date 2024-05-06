function LinkedList(list){

    const append=(value)=>{

        for(let i=list;i!=null;i=i.next){
            if(i.next===null){
                i.next={"value":value,next:null}
                break;
            }
        }
        return LinkedList(list)
    }
    const prepend=(value)=>{
        let newStart={"value":value,next:list}
        return LinkedList(newStart)

    }
    const size=()=>{
        let count=0
        for(let i=list;i!=null;i=i.next){
            count++
        }
        return count
    }

    const head=()=>{
        return  list
    }

    const tail=()=>{
        
        for(let i=list;i!=null;i=i.next){
            if(i.next===null){
               return i
            }
        }

    }

    const at=(index)=>{
        let count =0;
        for(let i=list;i!=null;i=i.next){
            if(index===count){
                return i
            }
            count++
        }
    }

    const pop=()=>{
        
        for(let i=list;i!=null;i=i.next){
            if(i.next.next===null){
                console.log(i.next)
                i.next=null;
                
                break;
            }

        }
        return LinkedList(list)

    }

    const contains=(value)=>{
        for(let i=list;i!=null;i=i.next){
            if(i.value===value){
                return true 
            }
        }
        return false

    }

    const find=(value)=>{
        let count =0;
        for(let i=list;i!=null;i=i.next){
            if(i.value===value){
                return count
            }
            count++
        }
        return null
    }

    const toString=()=>{
        let str=''
        for(let i=list;i!=null;i=i.next){
            if(i.next===null){
                str+=String(i.value)+'->null'
            
            }else{
                str+=String(i.value)+'->'
            }
        }

        
        return str
    }

    const insertAt=(value,index)=>{
        if(index===0){
        return  prepend(value)
        }
        
        let count=0;
        for(let i=list;i!=null;i=i.next){
            if(index-1===count){
                let temp=i.next
                i.next=Node(value,temp)
            }
            count++
        }
        return LinkedList(list)
    }

    const removeAt=(index)=>{
        if(index===0){
            return LinkedList(list.next)
        }
        let count=0
        for(let i=list;i!=null;i=i.next){
            if(index-1===count){
                i.next=i.next.next
                break;
            }
            count++
        }
        return LinkedList(list)

    }
  
  return {
    list ,append,prepend,size,head,tail,at,pop,contains,find,toString,insertAt,removeAt
  }
}

function Node(value=null,next=null){

    return {value, next}
}


let list3=LinkedList({
    value:1,
    next:{
        value:2,
        next:{
            value:3,
            next:null
        }
    }
})

//let list2=list1.append(4)

console.log(list3.removeAt(2))