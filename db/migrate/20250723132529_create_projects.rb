class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :url
      t.string :github

      t.timestamps
    end
  end
end
