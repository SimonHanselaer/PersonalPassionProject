{
  storybookBaseConfig.resolve.modules = [
    ...(storybookBaseConfig.resolve.modules || []),
    path.resolve(__dirname, "../app/javascript/src")
  ];
}
