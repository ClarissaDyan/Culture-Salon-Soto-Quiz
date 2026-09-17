# Deploy Script for Culture Salon Soto Quiz
Write-Host "Pushing changes to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host "✔ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Live URL will be: https://clarissadyan.github.io/Culture-Salon-Soto-Quiz/" -ForegroundColor Yellow
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Please make sure you have created the empty repository on GitHub first:" -ForegroundColor Red
    Write-Host "https://github.com/new with name 'Culture-Salon-Soto-Quiz'" -ForegroundColor Yellow
}
