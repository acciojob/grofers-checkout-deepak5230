const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	            const priceElements = document.querySelectorAll('.prices');

            // Sum the prices
            let totalPrice = 0;
            priceElements.forEach(priceElement => {
                const price = parseFloat(priceElement.textContent);
                if (!isNaN(price)) {
                    totalPrice += price;
                }
            });

            // Create a new row for the total price
            const totalRow = document.createElement('tr');
            const totalCell = document.createElement('td');
            totalCell.setAttribute('colspan', 2);
            totalCell.classList.add('total-cell');
            totalCell.textContent = `Total: $${totalPrice.toFixed(2)}`;
            
            totalRow.appendChild(totalCell);

            // Append the new row to the table
            const table = document.getElementById('groceryTable');
            table.appendChild(totalRow);
        }

        // Call the function to calculate and display the total price
        calculateTotal();

//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

