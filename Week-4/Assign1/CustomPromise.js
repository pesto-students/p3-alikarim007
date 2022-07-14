const CustomPromiseState = {
    PENDING:  "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED"
    };

class CustomPromise{ 
        constructor(fn) {
        this.CustomPromiseState = CustomPromiseState.PENDING; 
        this.resolver =this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFn= null;
        this.catchFn = null;
        fn(this.resolver, this.rejector); 
        }
        
        resolver(resolverData){
            if (this.CustomPromiseState === CustomPromiseState.PENDNIG){
            this.thenFn && this.thenFn(resolvedData);
            }
            this.CustomPromiseState = CustomPromiseState.RESOLVED;
        }
        rejector(rejectorData){
            if (this.CustomPromiseState === CustomPromiseState.PENDNIG){
            this.thenFn && this.thenFn(resolvedData);
            }
            this.CustomPromiseState = CustomPromiseState.REJECTED;
        }
        then(thenFn){
        this.thenFn = thenFn;
        return this;
        }
        catch(catchFn){
        this.catchFn = catchFn;
        return this;
        }
}

const getNumber = () =>
  new CustomPromiseState((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Rejected with num: ${randomNumber} `);
      }
      res(`Resolved with num: ${randomNumber}`);
    }, randomNumber * 10);
  });

    
    