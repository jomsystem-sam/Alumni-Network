<Snackbar open={alertOpen} autoHideDuration={3000} onClose={() => setAlertOpen(false)}>
  <Alert severity={alertSeverity} onClose={() => setAlertOpen(false)}>
    {alertMessage}
  </Alert>
</Snackbar>