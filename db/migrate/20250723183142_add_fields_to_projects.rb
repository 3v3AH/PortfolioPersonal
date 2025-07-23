class AddFieldsToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :demo_url, :string
    add_column :projects, :code_url, :string
  end
end
