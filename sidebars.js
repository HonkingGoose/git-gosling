module.exports = {
  docs: [
    {
      type: "category",
      label: "About this guide",
      items: ["license", "guide_introduction", "conventions", "abbreviations"],
    },
    {
      type: "category",
      label: "Getting started with Git",
      items: ["installing_git", "configuring_git", "getting_help"],
    },
    {
      type: "category",
      label: "The Nano text editor",
      items: ["nano_text_editor_introduction"],
    },
    {
      type: "category",
      label: "Git sandbox",
      items: [
        "sandbox_setup",
        "sandbox_explore_files",
        "sandbox_git_status",
        "sandbox_first_git_add",
        "sandbox_first_commit",
        "sandbox_git_add_after_changed_file",
        "sandbox_git_restore",
        `sandbox_create_branch`,
        "sandbox_git_switch",
        "sandbox_git_merge",
        "sandbox_create_a_github_account",
        "sandbox_create_first_github_repo",
        "sandbox_edit_file_on_github",
        "sandbox_merge_pull_request",
        "sandbox_fetch_merge_pull_changes",
        "sandbox_git_log",
      ],
    },
    {
      type: "category",
      label: "Best practices",
      items: [
        "best_practices_use_a_gitignore_file",
        "best_practices_split_up_your_commits",
        "best_practices_write_good_commit_messages",
        `best_practices_linters`,
        "best_practices_merges",
        "best_practices_dealing_with_dependencies",
        "best_practices_testing_github_actions",
      ],
    },
    {
      type: "category",
      label: "Advanced topics",
      items: ["advanced_git_configuration", "clean_up_your_git_history"],
    },
    {
      type: "category",
      label: "Further resources",
      items: ["recommended_reading"],
    },
  ],
};
