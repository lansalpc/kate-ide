"PostDeploy.ps1"

function Log-Date 
{
    ((get-date).ToUniversalTime()).ToString("yyyy-MM-dd HH:mm:ssZ")
}

$MyInvocation.MyCommand.Path
$ExecuteDir = Join-Path (Split-Path (Split-Path $MyInvocation.MyCommand.Path)) 'x_win95\x_lansa\execute'
   
if ( !(Test-Path $ExecuteDir -PathType Container)) {
    $ExecuteDir = Join-Path (Split-Path (Split-Path $MyInvocation.MyCommand.Path)) 'x_win64\x_lansa\execute'
}

[String[]] $Arguments = @( "PROC=*INSTALL")

Write-Output ("$(Log-Date) Arguments = $Arguments")

$x_err = (Join-Path $ENV:TEMP 'x_err.log')
Remove-Item $x_err -Force -ErrorAction SilentlyContinue

Write-Output ("$(Log-Date) Installing LANSA tables")
$p = Start-Process -FilePath (Join-Path $ExecuteDir 'x_run.exe') -ArgumentList $Arguments -Wait -PassThru


if ( $p.ExitCode -ne 0 ) {
   $ErrorMessage = "Package Install returned error code $($p.ExitCode)."
   Write-Error $ErrorMessage -Category NotInstalled
   throw $ErrorMessage
}
