const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculateNetSalary = (basicSalary, benefits) => {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    const nssfDeductions = calculateNSSFDeductions(basicSalary);
    const housingLevy = grossSalary * 0.015;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions - housingLevy;
  
    return {
      grossSalary,
      payee,
      nhifDeductions,
      nssfDeductions,
      housingLevy,
      netSalary
    };
  };
  
  const calculatePayee = (grossSalary) => {
    if (grossSalary <= 24000) return grossSalary * 0.1;
    if (grossSalary <= 32333) return 24000 * 0.1 + (grossSalary - 24000) * 0.25;
    if (grossSalary <= 500000) return 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
    if (grossSalary <= 800000) return 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (grossSalary - 500000) * 0.325;
    return 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
  };
  
  const calculateNHIFDeductions = (grossSalary) => {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
  };
  
  const calculateNSSFDeductions = (basicSalary) => {
    const nssfTier1Limit = 6000;
    const nssfTier2Limit = 18000;
    const nssfRate = 0.06;
  
    if (basicSalary <= nssfTier1Limit) return basicSalary * nssfRate;
    if (basicSalary <= nssfTier2Limit) return nssfTier1Limit * nssfRate + (basicSalary - nssfTier1Limit) * nssfRate;
    return nssfTier1Limit * nssfRate + (nssfTier2Limit - nssfTier1Limit) * nssfRate;
  };

  const promptUserInput = () => {
    rl.question('Enter the basic salary: ', (basicSalaryInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        rl.question('Enter the benefits: ', (benefitsInput) => {
            const benefits = parseFloat(benefitsInput);
            const salaryDetails = calculateNetSalary(basicSalary, benefits);

            console.log("Salary Details:", salaryDetails);
            rl.close();
        });
    });
};

console.log(promptUserInput());

