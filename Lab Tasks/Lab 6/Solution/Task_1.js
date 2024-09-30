class SD 
{   
    constructor() {
      this.sales = [];
    }
  
    add(input) {
      this.sales.push(input);
    }
  
    getHighestSales() 
    {
        let highestSales = this.sales[0];

        for (let i=1 ; i<this.sales.length; i++)
        {
          if (this.sales[i] > highestSales)
          {
            highestSales = this.sales[i];
          }
        }

        return highestSales;
    }
  
    getLowestSales() 
    {
        let lowestSales = this.sales[0];

        for (let i=1 ; i<this.sales.length; i++)
        {
          if (this.sales[i] < lowestSales)
          {
            lowestSales = this.sales[i];
          }
        }

        return lowestSales;
    }
  
    getAverageSales() 
    {
      let totalSales = 0;

      for (let i=0 ; i<this.sales.length; i++)
      {
        totalSales += this.sales[i];
      }

      return totalSales / this.sales.length;
    }
  }
  
  const salesData = new SD();
  
  salesData.add(200);
  salesData.add(300);
  salesData.add(250);
  salesData.add(400);
  salesData.add(350);
  salesData.add(450);
  salesData.add(500);
  
  console.log("Highest: " + salesData.getHighestSales()); 
  console.log("Lowest: " + salesData.getLowestSales());   
  console.log("Average: " + salesData.getAverageSales()); 
  