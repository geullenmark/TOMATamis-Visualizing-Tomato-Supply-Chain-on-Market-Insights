const supplyData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
        {
            label: 'Daily Supply Trend',
            data: [30, 45, 60, 40, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2, // Adjust the border width
            pointRadius: 6, // Adjust the point radius
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Adjust the point color
        },
    ],
  };
  
  const ctx = document.getElementById('supplyChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: supplyData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        elements: {
            line: {
                tension: 0.4, // Adjust the line tension
            },
        },
    },
  });

  // CODE FOR GEOGRAPHICAL
  const salesData = {
    labels: ['Iloilo', 'Capiz', 'Aklan', 'Antique'],
    datasets: [
        {
            label: 'Tomato Sales Distribution',
            data: [120, 90, 80, 110], // Replace with actual sales data
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 2, // Adjust the border width
        },
    ],
};

const salesContext = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesContext, {
    type: 'bar',
    data: salesData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
