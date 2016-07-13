class AddLockedToUserLevel < ActiveRecord::Migration
  def change
    add_column :user_levels, :locked, :boolean
  end
end
