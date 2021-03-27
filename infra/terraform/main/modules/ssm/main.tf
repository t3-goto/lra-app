#################################
# Session Manager
#################################
resource "aws_ssm_document" "session_manager_run_shell" {
  name = var.name
  document_type = "Session"
  document_format = "JSON"

  content = <<EOF
  {
    "schemaVersion": "1.0",
    "description": "Document to hold regional settings for Session Manager",
    "sessionType": "Standard_Stream"
  }
  EOF
  # TODO: Add cloudwatchlog/s3bucket
}
